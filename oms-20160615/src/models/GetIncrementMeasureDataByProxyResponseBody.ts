// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncrementMeasureDataByProxyResponseBody extends $dara.Model {
  /**
   * @example
   * false
   */
  compressed?: string;
  /**
   * @example
   * "[{\\"meteringData\\":{\\"ProviderId\\":\\"26842\\",\\"InstanceId\\":\\"XXX\\",\\"Size\\":\\"123\\",\\"UserId\\":\\"123\\",\\"ProductId\\":\\"XX\\"},\\"modifyTime\\":1700634920,\\"status\\":\\"Stop\\"}]"
   */
  data?: string;
  /**
   * @example
   * hour
   */
  dataType?: string;
  /**
   * @example
   * XXDEMO
   */
  domainCode?: string;
  /**
   * @remarks
   * Id of the request
   * 
   * @example
   * 645B25AB-4E09-5DCA-8443-A7A58138690B
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      compressed: 'Compressed',
      data: 'Data',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressed: 'string',
      data: 'string',
      dataType: 'string',
      domainCode: 'string',
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

