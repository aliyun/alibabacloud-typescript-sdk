// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";


export class GetSkillVersionDetailResponseBodyData extends $dara.Model {
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
   * skill-example
   */
  name?: string;
  /**
   * @remarks
   * The resource mapping (key is the resource name).
   */
  resource?: { [key: string]: DataResourceValue };
  /**
   * @remarks
   * The Skill card content (SKILL.md).
   * 
   * @example
   * # Sample Skill
   * 
   * Used to demonstrate Skill document content
   */
  skillMd?: string;
  /**
   * @remarks
   * The workspace ID.
   * 
   * @example
   * ws-1234567890abcdef
   */
  workspaceId?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'description',
      name: 'name',
      resource: 'resource',
      skillMd: 'skillMd',
      workspaceId: 'workspaceId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      resource: { 'type': 'map', 'keyType': 'string', 'valueType': DataResourceValue },
      skillMd: 'string',
      workspaceId: 'string',
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

export class GetSkillVersionDetailResponseBody extends $dara.Model {
  /**
   * @remarks
   * The response data.
   */
  data?: GetSkillVersionDetailResponseBodyData;
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
      data: GetSkillVersionDetailResponseBodyData,
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

