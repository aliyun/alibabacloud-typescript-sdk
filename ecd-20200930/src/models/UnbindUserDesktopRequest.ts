// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UnbindUserDesktopRequest extends $dara.Model {
  desktopAgentIds?: string[];
  desktopGroupId?: string;
  desktopIds?: string[];
  force?: boolean;
  reason?: string;
  userDesktopIds?: string[];
  static names(): { [key: string]: string } {
    return {
      desktopAgentIds: 'DesktopAgentIds',
      desktopGroupId: 'DesktopGroupId',
      desktopIds: 'DesktopIds',
      force: 'Force',
      reason: 'Reason',
      userDesktopIds: 'UserDesktopIds',
    };
  }

  static types(): { [key: string]: any } {
    return {
      desktopAgentIds: { 'type': 'array', 'itemType': 'string' },
      desktopGroupId: 'string',
      desktopIds: { 'type': 'array', 'itemType': 'string' },
      force: 'boolean',
      reason: 'string',
      userDesktopIds: { 'type': 'array', 'itemType': 'string' },
    };
  }

  validate() {
    if(Array.isArray(this.desktopAgentIds)) {
      $dara.Model.validateArray(this.desktopAgentIds);
    }
    if(Array.isArray(this.desktopIds)) {
      $dara.Model.validateArray(this.desktopIds);
    }
    if(Array.isArray(this.userDesktopIds)) {
      $dara.Model.validateArray(this.userDesktopIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

