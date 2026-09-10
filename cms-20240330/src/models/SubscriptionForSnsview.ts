// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { FilterSetting } from "./FilterSetting";
import { WorkspaceFilterSetting } from "./WorkspaceFilterSetting";


export class SubscriptionForSNSView extends $dara.Model {
  /**
   * @remarks
   * The time when the subscription was created.
   * 
   * @example
   * 1700000000
   */
  createTime?: string;
  /**
   * @remarks
   * Indicates whether the subscription is enabled.
   * 
   * @example
   * true
   */
  enable?: boolean;
  /**
   * @remarks
   * The filter configuration.
   */
  filterSetting?: FilterSetting;
  /**
   * @remarks
   * The lifecycle mode.
   * 
   * @example
   * Sample value
   */
  mode?: string;
  /**
   * @remarks
   * The subscription name.
   * 
   * @example
   * Sample name
   */
  name?: string;
  /**
   * @remarks
   * The reverse association to the SNS (= snsUuid).
   * 
   * @example
   * example-id-001
   */
  notifyStrategyUuid?: string;
  /**
   * @remarks
   * The region ID.
   * 
   * @example
   * example-id-001
   */
  regionId?: string;
  /**
   * @remarks
   * Indicates whether the subscription includes legacy product events (CMS 1.0, ARMS, or SLS events where workspace is null). Valid values: true: Subscribed. false or null: Not subscribed.
   * 
   * @example
   * true
   */
  subscribeLegacyEvent?: boolean;
  /**
   * @remarks
   * The subscription type.
   * 
   * @example
   * default
   */
  subscriptionType?: string;
  /**
   * @remarks
   * The sync source type.
   * 
   * @example
   * default
   */
  syncFromType?: string;
  /**
   * @remarks
   * The time when the subscription was last updated.
   * 
   * @example
   * 1700000000
   */
  updateTime?: string;
  /**
   * @remarks
   * The user ID of the owner.
   * 
   * @example
   * example-id-001
   */
  userId?: string;
  /**
   * @remarks
   * The subscription UUID.
   * 
   * @example
   * example-id-001
   */
  uuid?: string;
  /**
   * @remarks
   * The workspace.
   * 
   * @example
   * Sample value
   */
  workspace?: string;
  /**
   * @remarks
   * The workspace filter configuration.
   */
  workspaceFilterSetting?: WorkspaceFilterSetting;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      enable: 'enable',
      filterSetting: 'filterSetting',
      mode: 'mode',
      name: 'name',
      notifyStrategyUuid: 'notifyStrategyUuid',
      regionId: 'regionId',
      subscribeLegacyEvent: 'subscribeLegacyEvent',
      subscriptionType: 'subscriptionType',
      syncFromType: 'syncFromType',
      updateTime: 'updateTime',
      userId: 'userId',
      uuid: 'uuid',
      workspace: 'workspace',
      workspaceFilterSetting: 'workspaceFilterSetting',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      enable: 'boolean',
      filterSetting: FilterSetting,
      mode: 'string',
      name: 'string',
      notifyStrategyUuid: 'string',
      regionId: 'string',
      subscribeLegacyEvent: 'boolean',
      subscriptionType: 'string',
      syncFromType: 'string',
      updateTime: 'string',
      userId: 'string',
      uuid: 'string',
      workspace: 'string',
      workspaceFilterSetting: WorkspaceFilterSetting,
    };
  }

  validate() {
    if(this.filterSetting && typeof (this.filterSetting as any).validate === 'function') {
      (this.filterSetting as any).validate();
    }
    if(this.workspaceFilterSetting && typeof (this.workspaceFilterSetting as any).validate === 'function') {
      (this.workspaceFilterSetting as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

