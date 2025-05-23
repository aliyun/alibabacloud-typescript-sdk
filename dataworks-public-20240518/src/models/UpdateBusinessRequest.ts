// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateBusinessRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 300000
   */
  businessId?: number;
  /**
   * @example
   * MyBusiness
   */
  businessName?: string;
  /**
   * @example
   * modified from my first business
   */
  description?: string;
  /**
   * @example
   * 348428****
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * dw_project
   */
  projectIdentifier?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      projectIdentifier: 'ProjectIdentifier',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'number',
      projectIdentifier: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

