// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpdateCrossAccountsRequestCreateTargets extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***7890
   */
  targetId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrossAccountsRequestDeleteTargets extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * 123***7890
   */
  targetId?: string;
  /**
   * @remarks
   * This parameter is required.
   * 
   * @example
   * ACCOUNT
   */
  targetType?: string;
  static names(): { [key: string]: string } {
    return {
      targetId: 'TargetId',
      targetType: 'TargetType',
    };
  }

  static types(): { [key: string]: any } {
    return {
      targetId: 'string',
      targetType: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpdateCrossAccountsRequest extends $dara.Model {
  createTargets?: UpdateCrossAccountsRequestCreateTargets[];
  deleteTargets?: UpdateCrossAccountsRequestDeleteTargets[];
  static names(): { [key: string]: string } {
    return {
      createTargets: 'CreateTargets',
      deleteTargets: 'DeleteTargets',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTargets: { 'type': 'array', 'itemType': UpdateCrossAccountsRequestCreateTargets },
      deleteTargets: { 'type': 'array', 'itemType': UpdateCrossAccountsRequestDeleteTargets },
    };
  }

  validate() {
    if(Array.isArray(this.createTargets)) {
      $dara.Model.validateArray(this.createTargets);
    }
    if(Array.isArray(this.deleteTargets)) {
      $dara.Model.validateArray(this.deleteTargets);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

