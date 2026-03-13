// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class TagResourcesSystemTagsRequestTag extends $dara.Model {
  key?: string;
  value?: string;
  static names(): { [key: string]: string } {
    return {
      key: 'Key',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      key: 'string',
      value: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class TagResourcesSystemTagsRequest extends $dara.Model {
  regionId?: string;
  resourceId?: string[];
  resourceType?: string;
  scope?: string;
  tag?: TagResourcesSystemTagsRequestTag[];
  tagOwnerUid?: number;
  static names(): { [key: string]: string } {
    return {
      regionId: 'RegionId',
      resourceId: 'ResourceId',
      resourceType: 'ResourceType',
      scope: 'Scope',
      tag: 'Tag',
      tagOwnerUid: 'TagOwnerUid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      regionId: 'string',
      resourceId: { 'type': 'array', 'itemType': 'string' },
      resourceType: 'string',
      scope: 'string',
      tag: { 'type': 'array', 'itemType': TagResourcesSystemTagsRequestTag },
      tagOwnerUid: 'number',
    };
  }

  validate() {
    if(Array.isArray(this.resourceId)) {
      $dara.Model.validateArray(this.resourceId);
    }
    if(Array.isArray(this.tag)) {
      $dara.Model.validateArray(this.tag);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

