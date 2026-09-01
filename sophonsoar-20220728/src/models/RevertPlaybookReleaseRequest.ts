// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class RevertPlaybookReleaseRequest extends $dara.Model {
  /**
   * @remarks
   * Specifies whether to publish the playbook after the rollback.
   * 
   * - **true** (default): Publishes the playbook after the rollback.
   * 
   * - **false**: Rolls back the playbook without publishing it.
   * 
   * @example
   * true
   */
  isPublish?: boolean;
  /**
   * @remarks
   * The ID of the published playbook version.
   * 
   * > Call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation to obtain this parameter.
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
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
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

