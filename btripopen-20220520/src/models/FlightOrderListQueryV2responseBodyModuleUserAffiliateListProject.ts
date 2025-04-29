// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class FlightOrderListQueryV2ResponseBodyModuleUserAffiliateListProject extends $dara.Model {
  /**
   * @example
   * test_project_id
   */
  projectId?: string;
  projectTitle?: string;
  /**
   * @example
   * test_third_part_project_id
   */
  thirdpartProjectId?: string;
  static names(): { [key: string]: string } {
    return {
      projectId: 'project_id',
      projectTitle: 'project_title',
      thirdpartProjectId: 'thirdpart_project_id',
    };
  }

  static types(): { [key: string]: any } {
    return {
      projectId: 'string',
      projectTitle: 'string',
      thirdpartProjectId: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

