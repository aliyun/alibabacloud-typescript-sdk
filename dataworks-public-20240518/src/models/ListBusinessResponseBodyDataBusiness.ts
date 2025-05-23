// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListBusinessResponseBodyDataBusiness extends $dara.Model {
  /**
   * @example
   * 3000001
   */
  businessId?: number;
  businessName?: string;
  description?: string;
  /**
   * @example
   * 34824327****
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: number;
  /**
   * @example
   * NORMAL
   */
  useType?: string;
  static names(): { [key: string]: string } {
    return {
      businessId: 'BusinessId',
      businessName: 'BusinessName',
      description: 'Description',
      owner: 'Owner',
      projectId: 'ProjectId',
      useType: 'UseType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessId: 'number',
      businessName: 'string',
      description: 'string',
      owner: 'string',
      projectId: 'number',
      useType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

