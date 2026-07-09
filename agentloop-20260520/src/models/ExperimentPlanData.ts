// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExperimentPlanData extends $dara.Model {
  createdAt?: number;
  datasetId?: string;
  description?: string;
  experimentCount?: number;
  experimentType?: string;
  planId?: string;
  planName?: string;
  querySql?: string;
  status?: string;
  updatedAt?: number;
  static names(): { [key: string]: string } {
    return {
      createdAt: 'createdAt',
      datasetId: 'datasetId',
      description: 'description',
      experimentCount: 'experimentCount',
      experimentType: 'experimentType',
      planId: 'planId',
      planName: 'planName',
      querySql: 'querySql',
      status: 'status',
      updatedAt: 'updatedAt',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createdAt: 'number',
      datasetId: 'string',
      description: 'string',
      experimentCount: 'number',
      experimentType: 'string',
      planId: 'string',
      planName: 'string',
      querySql: 'string',
      status: 'string',
      updatedAt: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

