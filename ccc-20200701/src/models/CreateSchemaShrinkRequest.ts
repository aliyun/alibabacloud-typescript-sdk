// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CreateSchemaShrinkRequest extends $dara.Model {
  /**
   * @example
   * -
   */
  description?: string;
  /**
   * @remarks
   * schema id
   * 
   * @example
   * profile
   */
  id?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b0eb2742-f37e-4c67-82d4-25c651c1c450
   */
  instanceId?: string;
  propertiesShrink?: string;
  /**
   * @example
   * 7BEEA660-A45A-45E3-98CC-AFC65E715C23
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      id: 'Id',
      instanceId: 'InstanceId',
      propertiesShrink: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      instanceId: 'string',
      propertiesShrink: 'string',
      requestId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

