// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateLangfuseOrgRequest extends $dara.Model {
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
   * The name of the Langfuse organization.
   * 
   * This parameter is required.
   * 
   * @example
   * org_name
   */
  name?: string;
  /**
   * @remarks
   * The email address of the Langfuse organization owner.
   * 
   * This parameter is required.
   * 
   * @example
   * john@company.com
   */
  ownerEmail?: string;
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
      name: 'Name',
      ownerEmail: 'OwnerEmail',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      name: 'string',
      ownerEmail: 'string',
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

