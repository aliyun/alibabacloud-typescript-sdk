// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMeasureDataResponseBody extends $dara.Model {
  /**
   * @example
   * Full
   */
  apiType?: string;
  /**
   * @example
   * raw
   */
  dataType?: string;
  /**
   * @remarks
   * OMS Domain
   * 
   * @example
   * VM
   */
  domainCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 1111-1111-1111
   */
  requestId?: string;
  /**
   * @example
   * 100
   */
  total?: number;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      requestId: 'RequestId',
      total: 'Total',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      dataType: 'string',
      domainCode: 'string',
      requestId: 'string',
      total: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

