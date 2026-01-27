// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';
import { StatisticsResources } from "./StatisticsResources";


export class NodeStatisticsGPUDetails extends $dara.Model {
  count?: number;
  idleNum?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      idleNum: 'IdleNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      idleNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeStatisticsHyperNodeDetails extends $dara.Model {
  count?: number;
  idleNum?: number;
  static names(): { [key: string]: string } {
    return {
      count: 'Count',
      idleNum: 'IdleNum',
    };
  }

  static types(): { [key: string]: any } {
    return {
      count: 'number',
      idleNum: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

export class NodeStatistics extends $dara.Model {
  actualMinResources?: StatisticsResources;
  GPUDetails?: NodeStatisticsGPUDetails[];
  hyperNodeDetails?: NodeStatisticsHyperNodeDetails[];
  idleResources?: StatisticsResources;
  schedulableResources?: StatisticsResources;
  systemReservedResources?: StatisticsResources;
  static names(): { [key: string]: string } {
    return {
      actualMinResources: 'ActualMinResources',
      GPUDetails: 'GPUDetails',
      hyperNodeDetails: 'HyperNodeDetails',
      idleResources: 'IdleResources',
      schedulableResources: 'SchedulableResources',
      systemReservedResources: 'SystemReservedResources',
    };
  }

  static types(): { [key: string]: any } {
    return {
      actualMinResources: StatisticsResources,
      GPUDetails: { 'type': 'array', 'itemType': NodeStatisticsGPUDetails },
      hyperNodeDetails: { 'type': 'array', 'itemType': NodeStatisticsHyperNodeDetails },
      idleResources: StatisticsResources,
      schedulableResources: StatisticsResources,
      systemReservedResources: StatisticsResources,
    };
  }

  validate() {
    if(this.actualMinResources && typeof (this.actualMinResources as any).validate === 'function') {
      (this.actualMinResources as any).validate();
    }
    if(Array.isArray(this.GPUDetails)) {
      $dara.Model.validateArray(this.GPUDetails);
    }
    if(Array.isArray(this.hyperNodeDetails)) {
      $dara.Model.validateArray(this.hyperNodeDetails);
    }
    if(this.idleResources && typeof (this.idleResources as any).validate === 'function') {
      (this.idleResources as any).validate();
    }
    if(this.schedulableResources && typeof (this.schedulableResources as any).validate === 'function') {
      (this.schedulableResources as any).validate();
    }
    if(this.systemReservedResources && typeof (this.systemReservedResources as any).validate === 'function') {
      (this.systemReservedResources as any).validate();
    }
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

