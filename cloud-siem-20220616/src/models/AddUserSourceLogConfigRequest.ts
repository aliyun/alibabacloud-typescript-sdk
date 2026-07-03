// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserSourceLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to add or delete the log collection task. Valid values:
   * 
   * - -1: Deletes the task.
   * 
   * - 0: Adds the task.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The detailed information about the SLS log to be collected.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  disPlayLine?: string;
  /**
   * @remarks
   * The region where the Data Management center of Threat Analysis is located. Select a region based on the region where your assets reside. Valid values:
   * 
   * - cn-hangzhou: Your assets are in the Chinese mainland or Hong Kong (China).
   * 
   * - ap-southeast-1: Your assets are in regions outside China.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The code of the log.
   * 
   * @example
   * cloud_siem_aegis_proc
   */
  sourceLogCode?: string;
  /**
   * @remarks
   * The detailed information about the Simple Log Service (SLS) log to be collected. The value is a JSON string.
   * 
   * This parameter is required.
   * 
   * @example
   * {"project":"wafnew-project-1335759343513432-cn-hangzhou","logStore":"wafnew-logstore","regionCode":"cn-hangzhou","prodCode":"waf"}
   */
  sourceLogInfo?: string;
  /**
   * @remarks
   * The code of the product.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The ID of the Alibaba Cloud account for which you want to collect logs.
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

