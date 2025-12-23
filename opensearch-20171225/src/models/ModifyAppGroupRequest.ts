// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ModifyAppGroupRequest extends $dara.Model {
  /**
   * @remarks
   * The online version of the application.
   * 
   * @example
   * 1223232
   */
  currentVersion?: string;
  /**
   * @remarks
   * The description of the application.
   * 
   * @example
   * "test"
   */
  description?: string;
  /**
   * @remarks
   * The type of the industry. Valid values:
   * 
   * *   general: general.
   * *   ecommerce: e-commerce.
   * *   education: education.
   * *   esports: electronic sports.
   * *   community: content community.
   * 
   * @example
   * "ecommerce"
   */
  domain?: string;
  /**
   * @remarks
   * The ID of the resource group to which the instance belongs.
   * 
   * @example
   * rg-****
   */
  resourceGroupId?: string;
  /**
   * @remarks
   * Specifies whether to verify the application before modification. Valid values: true and false.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  static names(): { [key: string]: string } {
    return {
      currentVersion: 'currentVersion',
      description: 'description',
      domain: 'domain',
      resourceGroupId: 'resourceGroupId',
      dryRun: 'dryRun',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentVersion: 'string',
      description: 'string',
      domain: 'string',
      resourceGroupId: 'string',
      dryRun: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

