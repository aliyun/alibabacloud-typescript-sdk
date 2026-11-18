// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class AttachWhitelistTemplateToInstanceRequest extends $dara.Model {
  /**
   * @remarks
   * The IDs of the database instances. Separate multiple IDs with commas. You can associate up to 20 instances at a time.
   * 
   * This parameter is required.
   * 
   * @example
   * cc-nkhdbf1d,cc-nkhdbf1s
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * RegionId
   * 
   * This parameter is required.
   * 
   * @example
   * cn-hangzhou
   */
  regionId?: string;
  /**
   * @remarks
   * The ID of the whitelist template.
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

