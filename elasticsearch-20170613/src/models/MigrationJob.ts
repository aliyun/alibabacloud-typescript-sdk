// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrationJobSourceCluster extends $dara.Model {
  /**
   * @remarks
   * instanceId
   */
  instanceId?: string;
  /**
   * @remarks
   * type
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobStatusResult extends $dara.Model {
  /**
   * @remarks
   * code
   */
  code?: string;
  /**
   * @remarks
   * success
   */
  success?: boolean;
  static names(): { [key: string]: string } {
    return {
      code: 'code',
      success: 'success',
    };
  }

  static types(): { [key: string]: any } {
    return {
      code: 'string',
      success: 'boolean',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJobTargetCluster extends $dara.Model {
  /**
   * @remarks
   * type
   */
  instanceId?: string;
  /**
   * @remarks
   * type
   */
  type?: string;
  static names(): { [key: string]: string } {
    return {
      instanceId: 'instanceId',
      type: 'type',
    };
  }

  static types(): { [key: string]: any } {
    return {
      instanceId: 'string',
      type: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class MigrationJob extends $dara.Model {
  /**
   * @remarks
   * currentState
   */
  currentState?: string;
  /**
   * @remarks
   * disableSourceClusterAuth
   */
  disableSourceClusterAuth?: boolean;
  /**
   * @remarks
   * disableTargetClusterAuth
   */
  disableTargetClusterAuth?: boolean;
  /**
   * @remarks
   * endTime
   */
  endTime?: number;
  /**
   * @remarks
   * migrationJobId
   */
  migrationJobId?: string;
  /**
   * @remarks
   * phase
   */
  phase?: string;
  /**
   * @remarks
   * sourceCluster
   */
  sourceCluster?: MigrationJobSourceCluster;
  /**
   * @remarks
   * startTime
   */
  startTime?: number;
  /**
   * @remarks
   * statusResult
   */
  statusResult?: MigrationJobStatusResult[];
  /**
   * @remarks
   * targetCluster
   */
  targetCluster?: MigrationJobTargetCluster;
  /**
   * @remarks
   * updateTime
   */
  updateTime?: number;
  static names(): { [key: string]: string } {
    return {
      currentState: 'currentState',
      disableSourceClusterAuth: 'disableSourceClusterAuth',
      disableTargetClusterAuth: 'disableTargetClusterAuth',
      endTime: 'endTime',
      migrationJobId: 'migrationJobId',
      phase: 'phase',
      sourceCluster: 'sourceCluster',
      startTime: 'startTime',
      statusResult: 'statusResult',
      targetCluster: 'targetCluster',
      updateTime: 'updateTime',
    };
  }

  static types(): { [key: string]: any } {
    return {
      currentState: 'string',
      disableSourceClusterAuth: 'boolean',
      disableTargetClusterAuth: 'boolean',
      endTime: 'number',
      migrationJobId: 'string',
      phase: 'string',
      sourceCluster: MigrationJobSourceCluster,
      startTime: 'number',
      statusResult: { 'type': 'array', 'itemType': MigrationJobStatusResult },
      targetCluster: MigrationJobTargetCluster,
      updateTime: 'number',
    };
  }

  validate() {
    if(this.sourceCluster && typeof (this.sourceCluster as any).validate === 'function') {
      (this.sourceCluster as any).validate();
    }
    if(Array.isArray(this.statusResult)) {
      $dara.Model.validateArray(this.statusResult);
    }
    if(this.targetCluster && typeof (this.targetCluster as any).validate === 'function') {
      (this.targetCluster as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

