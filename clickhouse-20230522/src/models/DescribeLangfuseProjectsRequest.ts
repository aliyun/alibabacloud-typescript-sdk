// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseProjectsRequest extends $dara.Model {
  /**
   * @remarks
   * The Langfuse instance ID.
   * 
   * This parameter is required.
   * 
   * @example
   * lfs-****
   */
  DBInstanceId?: string;
  /**
   * @remarks
   * The Langfuse organization ID.
   * 
   * This parameter is required.
   * 
   * @example
   * cmrbhzx930005jw2q****
   */
  organizationId?: string;
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
  static names(): { [key: string]: string } {
    return {
      DBInstanceId: 'DBInstanceId',
      organizationId: 'OrganizationId',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      organizationId: 'string',
      regionId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

