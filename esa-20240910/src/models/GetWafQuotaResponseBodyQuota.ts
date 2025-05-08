// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { GetWafQuotaResponseBodyQuotaList } from "./GetWafQuotaResponseBodyQuotaList";
import { GetWafQuotaResponseBodyQuotaManagedRulesGroup } from "./GetWafQuotaResponseBodyQuotaManagedRulesGroup";
import { GetWafQuotaResponseBodyQuotaPage } from "./GetWafQuotaResponseBodyQuotaPage";
import { GetWafQuotaResponseBodyQuotaScenePolicy } from "./GetWafQuotaResponseBodyQuotaScenePolicy";


export class GetWafQuotaResponseBodyQuota extends $dara.Model {
  /**
   * @remarks
   * Quota information related to custom lists.
   */
  list?: GetWafQuotaResponseBodyQuotaList;
  /**
   * @remarks
   * Quota information related to the WAF managed rules group.
   */
  managedRulesGroup?: GetWafQuotaResponseBodyQuotaManagedRulesGroup;
  /**
   * @remarks
   * Quota information related to custom response pages.
   */
  page?: GetWafQuotaResponseBodyQuotaPage;
  /**
   * @remarks
   * Quota information related to scene protection.
   */
  scenePolicy?: GetWafQuotaResponseBodyQuotaScenePolicy;
  static names(): { [key: string]: string } {
    return {
      list: 'List',
      managedRulesGroup: 'ManagedRulesGroup',
      page: 'Page',
      scenePolicy: 'ScenePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      list: GetWafQuotaResponseBodyQuotaList,
      managedRulesGroup: GetWafQuotaResponseBodyQuotaManagedRulesGroup,
      page: GetWafQuotaResponseBodyQuotaPage,
      scenePolicy: GetWafQuotaResponseBodyQuotaScenePolicy,
    };
  }

  validate() {
    if(this.list && typeof (this.list as any).validate === 'function') {
      (this.list as any).validate();
    }
    if(this.managedRulesGroup && typeof (this.managedRulesGroup as any).validate === 'function') {
      (this.managedRulesGroup as any).validate();
    }
    if(this.page && typeof (this.page as any).validate === 'function') {
      (this.page as any).validate();
    }
    if(this.scenePolicy && typeof (this.scenePolicy as any).validate === 'function') {
      (this.scenePolicy as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

