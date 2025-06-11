// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class DescribeOasSQLPlansResponseBodyDataPlanExplain extends $dara.Model {
  /**
   * @remarks
   * JSON string of the SQL execution plan.
   * 
   * @example
   * {\\"RootOperations\\":[{\\"Children\\
   */
  planJsonString?: string;
  static names(): { [key: string]: string } {
    return {
      planJsonString: 'PlanJsonString',
    };
  }

  static types(): { [key: string]: any } {
    return {
      planJsonString: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

