// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { EntityDiscoverRule } from "./EntityDiscoverRule";


export class UpdateAddonReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * The version of the add-on.
   * 
   * @example
   * 0.0.2
   */
  addonVersion?: string;
  /**
   * @remarks
   * Specifies whether to perform a dry run for the request.
   * 
   * @example
   * true
   */
  dryRun?: boolean;
  /**
   * @remarks
   * The entity discovery rules.
   */
  entityRules?: EntityDiscoverRule;
  /**
   * @remarks
   * The metadata.
   * 
   * @example
   * {"install":{"mode":"auto-install","listenPort":"9400"},"discoverMode":"instances","discover":{"instances":"worker-k8s-for-cs-c126d87c76218487e83ab322017f11b44"},"scrapeInterval":"15","enableSecuritecs-nodeyGroupInjection":"true","metricTags":""}
   */
  values?: string;
  static names(): { [key: string]: string } {
    return {
      addonVersion: 'addonVersion',
      dryRun: 'dryRun',
      entityRules: 'entityRules',
      values: 'values',
    };
  }

  static types(): { [key: string]: any } {
    return {
      addonVersion: 'string',
      dryRun: 'boolean',
      entityRules: EntityDiscoverRule,
      values: 'string',
    };
  }

  validate() {
    if(this.entityRules && typeof (this.entityRules as any).validate === 'function') {
      (this.entityRules as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

