// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateVariableRequest extends $dara.Model {
  /**
   * @remarks
   * The ID of the Bailian business workspace.
   * 
   * @example
   * llm-baployoyopf22m2r
   */
  businessUnitId?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * Indicates the user type, including VIP and regular users
   */
  description?: string;
  /**
   * @remarks
   * The display name.
   * 
   * @example
   * UserType
   */
  displayName?: string;
  /**
   * @remarks
   * The variable name.
   * 
   * @example
   * userType
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      businessUnitId: 'BusinessUnitId',
      description: 'Description',
      displayName: 'DisplayName',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      businessUnitId: 'string',
      description: 'string',
      displayName: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

