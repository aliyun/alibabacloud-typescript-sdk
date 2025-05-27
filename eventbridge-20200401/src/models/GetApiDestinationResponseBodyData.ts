// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetApiDestinationResponseBodyDataHttpApiParameters } from "./GetApiDestinationResponseBodyDataHttpApiParameters";


export class GetApiDestinationResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The name of the API destination.
   * 
   * @example
   * demo
   */
  apiDestinationName?: string;
  /**
   * @remarks
   * The connection name.
   * 
   * @example
   * test-basic
   */
  connectionName?: string;
  /**
   * @remarks
   * The description of the API destination.
   * 
   * @example
   * demo
   */
  description?: string;
  /**
   * @remarks
   * The time when the API destination was created.
   * 
   * @example
   * 1649055710565
   */
  gmtCreate?: number;
  /**
   * @remarks
   * The request parameters that are configured for the API destination.
   */
  httpApiParameters?: GetApiDestinationResponseBodyDataHttpApiParameters;
  static names(): { [key: string]: string } {
    return {
      apiDestinationName: 'ApiDestinationName',
      connectionName: 'ConnectionName',
      description: 'Description',
      gmtCreate: 'GmtCreate',
      httpApiParameters: 'HttpApiParameters',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiDestinationName: 'string',
      connectionName: 'string',
      description: 'string',
      gmtCreate: 'number',
      httpApiParameters: GetApiDestinationResponseBodyDataHttpApiParameters,
    };
  }

  validate() {
    if(this.httpApiParameters && typeof (this.httpApiParameters as any).validate === 'function') {
      (this.httpApiParameters as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

