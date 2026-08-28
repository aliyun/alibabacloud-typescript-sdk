// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";


export class GetAgentSpecVersionResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The business tags.
   * 
   * @example
   * Sample property value
   */
  bizTags?: string;
  /**
   * @remarks
   * The content.
   * 
   * @example
   * Sample content
   */
  content?: string;
  /**
   * @remarks
   * The description.
   * 
   * @example
   * A sample description that explains the purpose of the resource
   */
  description?: string;
  /**
   * @remarks
   * The name.
   * 
   * @example
   * agentspec-example
   */
  name?: string;
  /**
   * @remarks
   * The resource file mapping.
   */
  resource?: { [key: string]: DataResourceValue };
  static names(): { [key: string]: string } {
    return {
      bizTags: 'bizTags',
      content: 'content',
      description: 'description',
      name: 'name',
      resource: 'resource',
    };
  }

  static types(): { [key: string]: any } {
    return {
      bizTags: 'string',
      content: 'string',
      description: 'string',
      name: 'string',
      resource: { 'type': 'map', 'keyType': 'string', 'valueType': DataResourceValue },
    };
  }

  validate() {
    if(this.resource) {
      $dara.Model.validateMap(this.resource);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class GetAgentSpecVersionResponseBody extends $dara.Model {
  /**
   * @remarks
   * The returned data.
   */
  data?: GetAgentSpecVersionResponseBodyData;
  /**
   * @remarks
   * The request ID.
   * 
   * @example
   * A1B2C3D4-E5F6-47A8-90AB-CDEF12345678
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'data',
      requestId: 'requestId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      data: GetAgentSpecVersionResponseBodyData,
      requestId: 'string',
    };
  }

  validate() {
    if(this.data && typeof (this.data as any).validate === 'function') {
      (this.data as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

