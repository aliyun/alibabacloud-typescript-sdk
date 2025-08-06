// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListTemplateGroupResponseBodyTemplateGroupsTemplateGroup extends $dara.Model {
  defaultGroup?: string;
  groupId?: string;
  groupSymbol?: string;
  groupType?: string;
  isLocked?: string;
  name?: string;
  status?: string;
  transcodeMode?: string;
  static names(): { [key: string]: string } {
    return {
      defaultGroup: 'DefaultGroup',
      groupId: 'GroupId',
      groupSymbol: 'GroupSymbol',
      groupType: 'GroupType',
      isLocked: 'IsLocked',
      name: 'Name',
      status: 'Status',
      transcodeMode: 'TranscodeMode',
    };
  }

  static types(): { [key: string]: any } {
    return {
      defaultGroup: 'string',
      groupId: 'string',
      groupSymbol: 'string',
      groupType: 'string',
      isLocked: 'string',
      name: 'string',
      status: 'string',
      transcodeMode: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateGroupResponseBodyTemplateGroups extends $dara.Model {
  templateGroup?: ListTemplateGroupResponseBodyTemplateGroupsTemplateGroup[];
  static names(): { [key: string]: string } {
    return {
      templateGroup: 'TemplateGroup',
    };
  }

  static types(): { [key: string]: any } {
    return {
      templateGroup: { 'type': 'array', 'itemType': ListTemplateGroupResponseBodyTemplateGroupsTemplateGroup },
    };
  }

  validate() {
    if(Array.isArray(this.templateGroup)) {
      $dara.Model.validateArray(this.templateGroup);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListTemplateGroupResponseBody extends $dara.Model {
  requestId?: string;
  templateGroups?: ListTemplateGroupResponseBodyTemplateGroups;
  static names(): { [key: string]: string } {
    return {
      requestId: 'RequestId',
      templateGroups: 'TemplateGroups',
    };
  }

  static types(): { [key: string]: any } {
    return {
      requestId: 'string',
      templateGroups: ListTemplateGroupResponseBodyTemplateGroups,
    };
  }

  validate() {
    if(this.templateGroups && typeof (this.templateGroups as any).validate === 'function') {
      (this.templateGroups as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

