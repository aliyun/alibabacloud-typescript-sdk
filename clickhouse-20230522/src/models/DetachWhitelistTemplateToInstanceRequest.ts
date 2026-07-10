// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DetachWhitelistTemplateToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the ClickHouse instances, separated by commas. You can specify up to 20 IDs.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-nkhdbf1d,cc-nkhdbf1s
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The whitelist template ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 98a6d3db05984dca
   */
  templateId?: string;
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      regionId: 'RegionId',
      templateId: 'TemplateId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      regionId: 'string',
      templateId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

