// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertPlaybookReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to directly publish the new playbook after the rollback.
   * 
   * *   **true** (default)
   * *   **false**
   * 
   * @example
   * true
   */
  isPublish?: boolean;
  /**
   * @remarks
   * The version of the playbook that you want to publish.
   * 
   * >  You can call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation to query the playbook version.
   * 
   * This parameter is required.
   * 
   * @example
   * 3f97b56e-064e-47e7-a309-xxxxxxx
   */
  playReleaseId?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * >  You can call the [DescribePlaybooks](~~DescribePlaybooks~~)operation to query the playbook UUID.
   * 
   * This parameter is required.
   * 
   * @example
   * 185295a1-c987-4b64-8796-xxxxxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      isPublish: 'IsPublish',
      playReleaseId: 'PlayReleaseId',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      isPublish: 'boolean',
      playReleaseId: 'number',
      playbookUuid: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

