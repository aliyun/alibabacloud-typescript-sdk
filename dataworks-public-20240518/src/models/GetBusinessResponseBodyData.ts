// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetBusinessResponseBodyData extends $dara.Model {
  /**
   * @example
   * 1000001
   */
  businessId?: number;
  /**
   * @example
   * The first business process
   */
  businessName?: string;
  /**
   * @example
   * This is my first business process.
   */
  description?: string;
  /**
   * @example
   * 20000****
   */
  owner?: string;
  /**
   * @example
   * 10000
   */
  projectId?: string;
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
      projectId: 'string',
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

