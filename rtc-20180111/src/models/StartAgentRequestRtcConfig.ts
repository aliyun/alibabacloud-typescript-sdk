// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class StartAgentRequestRtcConfig extends $dara.Model {
  targetUserIds?: string[];
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 423341
   */
  userId?: string;
  static names(): { [key: string]: string } {
    return {
      targetUserIds: 'TargetUserIds',
      userId: 'UserId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetUserIds: { 'type': 'array', 'itemType': 'string' },
      userId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.targetUserIds)) {
      $dara.Model.validateArray(this.targetUserIds);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

