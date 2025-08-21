// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class MigrationJobSourceCluster extends $dara.Model {
  instanceId?: string;
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
  code?: string;
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
  instanceId?: string;
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
  currentState?: string;
  disableSourceClusterAuth?: boolean;
  disableTargetClusterAuth?: boolean;
  endTime?: number;
  migrationJobId?: string;
  phase?: string;
  sourceCluster?: MigrationJobSourceCluster;
  startTime?: number;
  statusResult?: MigrationJobStatusResult[];
  targetCluster?: MigrationJobTargetCluster;
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

