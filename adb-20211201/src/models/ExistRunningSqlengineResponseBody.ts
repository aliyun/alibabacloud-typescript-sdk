// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExistRunningSQLEngineResponseBody extends $dara.Model {
  /**
   * @remarks
   * Indicates whether a running SQL engine exists in the resource group.
   * 
   * Valid values:
   * 
   * *   **True**
   * *   **False**
   * 
   * @example
   * True
   */
  data?: boolean;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * FA675D68-14A4-5D9C-8820-92537D9F447E
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: 'boolean',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

