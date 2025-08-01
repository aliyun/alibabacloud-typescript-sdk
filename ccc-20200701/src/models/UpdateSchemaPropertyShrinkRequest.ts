// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateSchemaPropertyShrinkRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * b0eb2742-f37e-4c67-82d4-25c651c1xxxx
   */
  instanceId?: string;
  propertyShrink?: string;
  /**
   * @example
   * BC976D32-AC4C-4E0F-8AA9-F4BC6C4E2B3E
   */
  requestId?: string;
  /**
   * @remarks
   * schema id
   * 
   * This parameter is required.
   * 
   * @example
   * profile
   */
  schemaId?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'InstanceId',
      propertyShrink: 'Property',
      requestId: 'RequestId',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      propertyShrink: 'string',
      requestId: 'string',
      schemaId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

