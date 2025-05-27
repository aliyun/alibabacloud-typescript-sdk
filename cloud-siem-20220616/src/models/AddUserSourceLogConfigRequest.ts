// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserSourceLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add logs or delete added logs. Valid values:
   * 
   * *   \\-1: deletes added logs.
   * *   0: adds logs.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The display details of the Logstore.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  disPlayLine?: string;
  /**
   * @remarks
   * The region in which the data management center of the threat analysis feature resides. Specify this parameter based on the regions in which your assets reside. Valid values:
   * 
   * *   cn-hangzhou: Your assets reside in regions in China.
   * *   ap-southeast-1: Your assets reside in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The log code.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The details of the Logstore that you want to use in the JSON string format.
   * 
   * This parameter is required.
   * 
   * @example
   * {"project":"wafnew-project-1335759343513432-cn-hangzhou","logStore":"wafnew-logstore","regionCode":"cn-hangzhou","prodCode":"waf"}
   */
  sourceLogInfo?: string;
  /**
   * @remarks
   * The code of the cloud service.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account.
   * 
   * This parameter is required.
   * 
   * @example
   * 123XXXXXX
   */
  subUserId?: number;
  static names(): { [key: string]: string } {
    return {
      deleted: 'Deleted',
      disPlayLine: 'DisPlayLine',
      regionId: 'RegionId',
      sourceLogCode: 'SourceLogCode',
      sourceLogInfo: 'SourceLogInfo',
      sourceProdCode: 'SourceProdCode',
      subUserId: 'SubUserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      deleted: 'number',
      disPlayLine: 'string',
      regionId: 'string',
      sourceLogCode: 'string',
      sourceLogInfo: 'string',
      sourceProdCode: 'string',
      subUserId: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

