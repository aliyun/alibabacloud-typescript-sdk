// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { CreateSchemaRequestProperties } from "./CreateSchemaRequestProperties";


export class CreateSchemaRequest extends $dara.Model {
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
  properties?: CreateSchemaRequestProperties[];
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
      properties: 'Properties',
      requestId: 'RequestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      id: 'string',
      instanceId: 'string',
      properties: { 'type': 'array', 'itemType': CreateSchemaRequestProperties },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.properties)) {
      $dara.Model.validateArray(this.properties);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

