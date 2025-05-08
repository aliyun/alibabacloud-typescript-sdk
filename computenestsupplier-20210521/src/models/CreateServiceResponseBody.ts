// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateServiceResponseBodyDryRunResult } from "./CreateServiceResponseBodyDryRunResult";


export class CreateServiceResponseBody extends $dara.Model {
  /**
   * @remarks
   * The dry run result.
   */
  dryRunResult?: CreateServiceResponseBodyDryRunResult;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * 4DB0F536-B3BE-4F0D-BD29-E83FB56D550C
   */
  requestId?: string;
  /**
   * @remarks
   * The service ID.
   * 
   * @example
   * service-0e6fca6a51a544xxxxxx
   */
  serviceId?: string;
  /**
   * @remarks
   * The status of the service.
   * 
   * @example
   * Created
   */
  status?: string;
  /**
   * @remarks
   * The service version.
   * 
   * @example
   * draft
   */
  version?: string;
  static names(): { [key: string]: string } {
    return {
      dryRunResult: 'DryRunResult',
      requestId: 'RequestId',
      serviceId: 'ServiceId',
      status: 'Status',
      version: 'Version',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dryRunResult: CreateServiceResponseBodyDryRunResult,
      requestId: 'string',
      serviceId: 'string',
      status: 'string',
      version: 'string',
    };
  }

  validate() {
    if(this.dryRunResult && typeof (this.dryRunResult as any).validate === 'function') {
      (this.dryRunResult as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

