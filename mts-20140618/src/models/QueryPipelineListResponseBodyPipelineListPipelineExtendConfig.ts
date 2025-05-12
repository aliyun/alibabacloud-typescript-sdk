// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QueryPipelineListResponseBodyPipelineListPipelineExtendConfig extends $dara.Model {
  isBoostNew?: boolean;
  maxMultiSpeed?: number;
  multiSpeedDowngradePolicy?: string;
  static names(): { [key: string]: string } {
    return {
      isBoostNew: 'IsBoostNew',
      maxMultiSpeed: 'MaxMultiSpeed',
      multiSpeedDowngradePolicy: 'MultiSpeedDowngradePolicy',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isBoostNew: 'boolean',
      maxMultiSpeed: 'number',
      multiSpeedDowngradePolicy: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

