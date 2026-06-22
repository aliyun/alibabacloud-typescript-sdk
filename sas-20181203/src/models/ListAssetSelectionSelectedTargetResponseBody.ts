// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListAssetSelectionSelectedTargetResponseBodyData extends $dara.Model {
  /**
   * @remarks
   * The asset ID. When selecting by machine, the value is the UUID of the machine. When selecting by group, the value is the group ID. When selecting by VPC, the value is the VPC ID.
   * 
   * @example
   * 30****
   */
  targetId?: string;
  /**
   * @remarks
   * The asset name.
   * 
   * @example
   * jen****
   */
  targetName?: string;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetName: 'TargetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ListAssetSelectionSelectedTargetResponseBody extends $dara.Model {
  /**
   * @remarks
   * The data details.
   */
  data?: ListAssetSelectionSelectedTargetResponseBodyData[];
  /**
   * @remarks
   * The request ID. Alibaba Cloud generates a unique identifier for each API request. You can use this ID to troubleshoot issues.
   * 
   * @example
   * 1EB12F73-6828-59D2-9FBF-F3713FD55128
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
      data: { 'type': 'array', 'itemType': ListAssetSelectionSelectedTargetResponseBodyData },
      requestId: 'string',
    };
  }

  validate() {
    if(Array.isArray(this.data)) {
      $dara.Model.validateArray(this.data);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

