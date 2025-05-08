// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class GetGatewayConfigResponseBodyDataEnableK8sSourceWorkloadFilter extends $dara.Model {
  enable?: boolean;
  filterOpt?: string;
  labelKey?: string;
  labelValue?: string;
  static names(): { [key: string]: string } {
    return {
      enable: 'Enable',
      filterOpt: 'FilterOpt',
      labelKey: 'LabelKey',
      labelValue: 'LabelValue',
    };
  }

  static types(): { [key: string]: any } {
    return {
      enable: 'boolean',
      filterOpt: 'string',
      labelKey: 'string',
      labelValue: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

