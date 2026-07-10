// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeLangfuseUserRequest extends $dara.Model {
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
   * The email address of the user.
   * 
   * This parameter is required.
   * 
   * @example
   * john@company.com
   */
  email?: string;
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
      email: 'Email',
      regionId: 'RegionId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      DBInstanceId: 'string',
      email: 'string',
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

