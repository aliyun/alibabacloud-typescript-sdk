// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AddUserSourceLogConfigRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies the ingestion action. Valid values:
   * - -1: Deletes the ingestion.
   * - 0: Adds the ingestion.
   * 
   * @example
   * 0
   */
  deleted?: number;
  /**
   * @remarks
   * The detailed Simple Log Service (SLS) information for log ingestion.
   * 
   * @example
   * cn-shanghai.siem-project.siem-logstore
   */
  disPlayLine?: string;
  /**
   * @remarks
   * The region where the data management center of Threat Analysis is located. Select the region of the management center based on the region of your assets. Valid values:
   * - cn-hangzhou: The assets are located in the Chinese mainland and Hong Kong (China).
   * - ap-southeast-1: The assets are located outside China.
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
   * The detailed Simple Log Service (SLS) information for log ingestion in JSON format.
   * 
   * This parameter is required.
   * 
   * @example
   * {"project":"wafnew-project-1335759343513432-cn-hangzhou","logStore":"wafnew-logstore","regionCode":"cn-hangzhou","prodCode":"waf"}
   */
  sourceLogInfo?: string;
  /**
   * @remarks
   * The product code.
   * 
   * @example
   * sas
   */
  sourceProdCode?: string;
  /**
   * @remarks
   * The Alibaba Cloud account ID for log ingestion.
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

