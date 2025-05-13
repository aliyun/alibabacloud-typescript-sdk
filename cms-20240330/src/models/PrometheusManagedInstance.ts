// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class PrometheusManagedInstance extends $dara.Model {
  createTime?: string;
  instanceType?: string;
  prometheusInstanceId?: string;
  prometheusInstanceName?: string;
  regionId?: string;
  status?: string;
  workspace?: string;
  static names(): { [key: string]: string } {
    return {
      createTime: 'createTime',
      instanceType: 'instanceType',
      prometheusInstanceId: 'prometheusInstanceId',
      prometheusInstanceName: 'prometheusInstanceName',
      regionId: 'regionId',
      status: 'status',
      workspace: 'workspace',
    };
  }

  static types(): { [key: string]: any } {
    return {
      createTime: 'string',
      instanceType: 'string',
      prometheusInstanceId: 'string',
      prometheusInstanceName: 'string',
      regionId: 'string',
      status: 'string',
      workspace: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

