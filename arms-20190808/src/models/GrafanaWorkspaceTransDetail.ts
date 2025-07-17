// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GrafanaWorkspaceTransDetail extends $dara.Model {
  dashboardAmount?: number;
  dataSourceAmount?: number;
  original?: number;
  originalName?: string;
  target?: number;
  targetName?: string;
  static names(): { [key: string]: string } {
    return {
      dashboardAmount: 'dashboardAmount',
      dataSourceAmount: 'dataSourceAmount',
      original: 'original',
      originalName: 'originalName',
      target: 'target',
      targetName: 'targetName',
    };
  }

  static types(): { [key: string]: any } {
    return {
      dashboardAmount: 'number',
      dataSourceAmount: 'number',
      original: 'number',
      originalName: 'string',
      target: 'number',
      targetName: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

