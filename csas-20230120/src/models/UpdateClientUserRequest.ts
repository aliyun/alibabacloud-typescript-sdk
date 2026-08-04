// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateClientUserRequest extends $dara.Model {
  /**
   * @remarks
   * Department ID.
   * 
   * @example
   * 10701
   */
  departmentId?: string;
  /**
   * @remarks
   * User description.
   * 
   * @example
   * 示例用户
   */
  description?: string;
  /**
   * @remarks
   * Email address.
   * 
   * @example
   * johndoe@example.com
   */
  email?: string;
  /**
   * @remarks
   * User ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 20644
   */
  id?: string;
  /**
   * @remarks
   * Mobile phone number without country code.
   * 
   * @example
   * 13641966835
   */
  mobileNumber?: string;
  static names(): { [key: string]: string } {
    return {
      departmentId: 'DepartmentId',
      description: 'Description',
      email: 'Email',
      id: 'Id',
      mobileNumber: 'MobileNumber',
    };
  }

  static types(): { [key: string]: any } {
    return {
      departmentId: 'string',
      description: 'string',
      email: 'string',
      id: 'string',
      mobileNumber: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

