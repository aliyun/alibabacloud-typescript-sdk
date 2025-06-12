// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DisableSchemaPropertyRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ef1e71e9-ae9d-487c-96ad-9181d85cf802
   */
  instanceId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * name
   */
  propertyName?: string;
  /**
   * @example
   * 2263B273-AC1B-44EB-BA98-87F2322C6780
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
      propertyName: 'PropertyName',
      requestId: 'RequestId',
      schemaId: 'SchemaId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      propertyName: 'string',
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

