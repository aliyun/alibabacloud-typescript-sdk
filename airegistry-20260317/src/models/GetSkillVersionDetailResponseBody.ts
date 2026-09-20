// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";


export class GetSkillVersionDetailResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The description of the Skill for the current version.
   * 
   * @example
   * secret for bbtadmin
   */
  description?: string;
  /**
   * @remarks
   * The Skill name.
   * 
   * @example
   * BusinessModel
   */
  name?: string;
  /**
   * @remarks
   * The namespace ID to which the application belongs.
   * 
   * @example
   * f52aea1c-774e-4cc1-9dd1-d91432484d44
   */
  namespaceId?: string;
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
   * ---
   * name: hello-world
   * description: Say hello to users
   * ---
   * 
   * Hello World Skill
   */
  skillMd?: string;
  static names(): { [key: string]: string } {
    return {
      description: 'Description',
      name: 'Name',
      namespaceId: 'NamespaceId',
      resource: 'Resource',
      skillMd: 'SkillMd',
    };
  }

  static types(): { [key: string]: any } {
    return {
      description: 'string',
      name: 'string',
      namespaceId: 'string',
      resource: { 'type': 'map', 'keyType': 'string', 'valueType': DataResourceValue },
      skillMd: 'string',
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
   * The detailed information about the Skill version.
   */
  data?: GetSkillVersionDetailResponseBodyData;
  /**
   * @remarks
   * The unique identifier that Alibaba Cloud generated for the request.
   * 
   * @example
   * 3EF4C9EC-0D5B-5AD6-8585-4D2AAA22B1E3
   */
  requestId?: string;
  static names(): { [key: string]: string } {
    return {
      data: 'Data',
      requestId: 'RequestId',
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

