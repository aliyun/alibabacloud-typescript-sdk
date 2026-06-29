// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfoAlertDutyList extends $dara.Model {
  /**
   * @remarks
   * The ID of the on-duty alert schedule.
   * 
   * @example
   * 1
   */
  id?: string;
  /**
   * @remarks
   * The name of the on-duty alert schedule.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfoAlertUserList extends $dara.Model {
  /**
   * @remarks
   * The user ID.
   * 
   * @example
   * 30012011
   */
  id?: string;
  /**
   * @remarks
   * The username.
   * 
   * @example
   * test
   */
  name?: string;
  static names(): { [key: string]: string } {
    return {
      id: 'Id',
      name: 'Name',
    };
  }

  static types(): { [key: string]: any } {
    return {
      id: 'string',
      name: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfo extends $dara.Model {
  /**
   * @remarks
   * The alert channels for on-duty schedules.
   */
  alertDutyChannelList?: string[];
  /**
   * @remarks
   * The list of on-duty schedules for alerts.
   */
  alertDutyList?: UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfoAlertDutyList[];
  /**
   * @remarks
   * The alert channels for the quality owner.
   */
  alertQualityOwnerChannelList?: string[];
  /**
   * @remarks
   * The alert channels for users.
   */
  alertUserChannelList?: string[];
  /**
   * @remarks
   * The list of users to receive alerts.
   */
  alertUserList?: UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfoAlertUserList[];
  /**
   * @remarks
   * Specifies whether to enable alerts for the quality owner.
   */
  enableAlertQualityOwner?: boolean;
  static names(): { [key: string]: string } {
    return {
      alertDutyChannelList: 'AlertDutyChannelList',
      alertDutyList: 'AlertDutyList',
      alertQualityOwnerChannelList: 'AlertQualityOwnerChannelList',
      alertUserChannelList: 'AlertUserChannelList',
      alertUserList: 'AlertUserList',
      enableAlertQualityOwner: 'EnableAlertQualityOwner',
    };
  }

  static types(): { [key: string]: any } {
    return {
      alertDutyChannelList: { 'type': 'array', 'itemType': 'string' },
      alertDutyList: { 'type': 'array', 'itemType': UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfoAlertDutyList },
      alertQualityOwnerChannelList: { 'type': 'array', 'itemType': 'string' },
      alertUserChannelList: { 'type': 'array', 'itemType': 'string' },
      alertUserList: { 'type': 'array', 'itemType': UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfoAlertUserList },
      enableAlertQualityOwner: 'boolean',
    };
  }

  validate() {
    if(Array.isArray(this.alertDutyChannelList)) {
      $dara.Model.validateArray(this.alertDutyChannelList);
    }
    if(Array.isArray(this.alertDutyList)) {
      $dara.Model.validateArray(this.alertDutyList);
    }
    if(Array.isArray(this.alertQualityOwnerChannelList)) {
      $dara.Model.validateArray(this.alertQualityOwnerChannelList);
    }
    if(Array.isArray(this.alertUserChannelList)) {
      $dara.Model.validateArray(this.alertUserChannelList);
    }
    if(Array.isArray(this.alertUserList)) {
      $dara.Model.validateArray(this.alertUserList);
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityWatchAlertRequestUpsertCommand extends $dara.Model {
  /**
   * @remarks
   * The alert configuration details.
   * 
   * This parameter is required.
   */
  qualityAlertInfo?: UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfo;
  /**
   * @remarks
   * The ID of the monitored object.
   * 
   * This parameter is required.
   * 
   * @example
   * 11
   */
  watchId?: number;
  static names(): { [key: string]: string } {
    return {
      qualityAlertInfo: 'QualityAlertInfo',
      watchId: 'WatchId',
    };
  }

  static types(): { [key: string]: any } {
    return {
      qualityAlertInfo: UpsertQualityWatchAlertRequestUpsertCommandQualityAlertInfo,
      watchId: 'number',
    };
  }

  validate() {
    if(this.qualityAlertInfo && typeof (this.qualityAlertInfo as any).validate === 'function') {
      (this.qualityAlertInfo as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class UpsertQualityWatchAlertRequest extends $dara.Model {
  /**
   * @remarks
   * The tenant ID.
   * 
   * This parameter is required.
   * 
   * @example
   * 30001011
   */
  opTenantId?: number;
  /**
   * @remarks
   * The update instruction.
   * 
   * This parameter is required.
   */
  upsertCommand?: UpsertQualityWatchAlertRequestUpsertCommand;
  static names(): { [key: string]: string } {
    return {
      opTenantId: 'OpTenantId',
      upsertCommand: 'UpsertCommand',
    };
  }

  static types(): { [key: string]: any } {
    return {
      opTenantId: 'number',
      upsertCommand: UpsertQualityWatchAlertRequestUpsertCommand,
    };
  }

  validate() {
    if(this.upsertCommand && typeof (this.upsertCommand as any).validate === 'function') {
      (this.upsertCommand as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

