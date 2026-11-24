// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


/**
 */
export class ArtifactLifecyclePolicyCondition extends $dara.Model {
  /**
   * @remarks
   * Retains artifact versions whose most recent pull time is within the specified number of days.
   * 
   * @example
   * 0
   */
  lastPullOlderThanDays?: number;
  /**
   * @remarks
   * Retains artifact versions whose most recent push time is within the specified number of days.
   * 
   * @example
   * 0
   */
  lastPushOlderThanDays?: number;
  /**
   * @remarks
   * The number of most recently pushed artifact versions to retain.
   * 
   * @example
   * 0
   */
  latestTagCount?: number;
  static names(): { [key: string]: string } {
    return {
      lastPullOlderThanDays: 'LastPullOlderThanDays',
      lastPushOlderThanDays: 'LastPushOlderThanDays',
      latestTagCount: 'LatestTagCount',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lastPullOlderThanDays: 'number',
      lastPushOlderThanDays: 'number',
      latestTagCount: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArtifactLifecyclePolicyFilter extends $dara.Model {
  /**
   * @remarks
   * The matching expression for the names of additionally retained artifact versions.
   */
  tagWildcard?: string;
  static names(): { [key: string]: string } {
    return {
      tagWildcard: 'TagWildcard',
    };
  }

  static types(): { [key: string]: any } {
    return {
      tagWildcard: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class ArtifactLifecyclePolicy extends $dara.Model {
  /**
   * @remarks
   * The retention conditions for artifact versions.
   */
  condition?: ArtifactLifecyclePolicyCondition;
  /**
   * @remarks
   * The filter conditions for artifact versions.
   */
  filter?: ArtifactLifecyclePolicyFilter;
  /**
   * @remarks
   * The type of the artifact version data retention policy.
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      condition: 'Condition',
      filter: 'Filter',
      type: 'Type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      condition: ArtifactLifecyclePolicyCondition,
      filter: ArtifactLifecyclePolicyFilter,
      type: 'string',
    };
  }

  validate() {
    if(this.condition && typeof (this.condition as any).validate === 'function') {
      (this.condition as any).validate();
    }
    if(this.filter && typeof (this.filter as any).validate === 'function') {
      (this.filter as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

