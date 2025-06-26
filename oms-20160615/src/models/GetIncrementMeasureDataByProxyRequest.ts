// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetIncrementMeasureDataByProxyRequest extends $dara.Model {
  /**
   * @example
   * false
   */
  compressEnable?: boolean;
  /**
   * @example
   * hour
   */
  dataType?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * XXDEMO
   */
  domainCode?: string;
  /**
   * @example
   * 1700634930
   */
  modifyEndTime?: number;
  /**
   * @example
   * 1700634920
   */
  modifyStartTime?: number;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * {\\"ProviderId\\":\\"26842\\",\\"InstanceId\\":\\"XXX\\",\\"UserId\\":123,\\"ProductId\\":\\"XX\\"}
   */
  rowKeyMapStr?: string;
  static names(): { [key: string]: string } {
    return {
      compressEnable: 'CompressEnable',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      modifyEndTime: 'ModifyEndTime',
      modifyStartTime: 'ModifyStartTime',
      rowKeyMapStr: 'RowKeyMapStr',
    };
  }

  static types(): { [key: string]: any } {
    return {
      compressEnable: 'boolean',
      dataType: 'string',
      domainCode: 'string',
      modifyEndTime: 'number',
      modifyStartTime: 'number',
      rowKeyMapStr: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

