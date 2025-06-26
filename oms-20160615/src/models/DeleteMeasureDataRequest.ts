// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DeleteMeasureDataRequest extends $dara.Model {
  /**
   * @example
   * Full
   */
  apiType?: string;
  /**
   * @example
   * false
   */
  compressed?: boolean;
  /**
   * @example
   * [{"UserId":"1192922887522200","ProductId":"VM","StartTime":"1556640000","EndTime":"1556726400","Region":"cn-hangzhou","InstanceId":"test1","CPU":"4"}]
   */
  data?: string;
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
   * @example
   * StartTime>1469980800;StartTime<1469984400
   */
  filter?: string;
  static names(): { [key: string]: string } {
    return {
      apiType: 'ApiType',
      compressed: 'Compressed',
      data: 'Data',
      dataType: 'DataType',
      domainCode: 'DomainCode',
      filter: 'Filter',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiType: 'string',
      compressed: 'boolean',
      data: 'string',
      dataType: 'string',
      domainCode: 'string',
      filter: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

