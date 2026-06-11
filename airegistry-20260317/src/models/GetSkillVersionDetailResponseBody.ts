// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { DataResourceValue } from "./DataResourceValue";


export class GetSkillVersionDetailResponseBodyData extends $dara.Model {
  description?: string;
  name?: string;
  namespaceId?: string;
  resource?: { [key: string]: DataResourceValue };
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
  data?: GetSkillVersionDetailResponseBodyData;
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

