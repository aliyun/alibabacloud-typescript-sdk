// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeCorePackageListRequest extends $dara.Model {
  /**
   * @remarks
   * This parameter is required.
   */
  apiKey?: string;
  queryDeductionInstances?: boolean;
  queryScenario?: string;
  static names(): { [key: string]: string } {
    return {
      apiKey: 'ApiKey',
      queryDeductionInstances: 'QueryDeductionInstances',
      queryScenario: 'QueryScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      apiKey: 'string',
      queryDeductionInstances: 'boolean',
      queryScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

