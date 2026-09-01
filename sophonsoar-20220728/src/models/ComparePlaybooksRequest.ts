// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ComparePlaybooksRequest extends $dara.Model {
  /**
   * @remarks
   * The language of the request and response.
   * 
   * - **zh** (default): Chinese
   * 
   * - **en**: English
   * 
   * @example
   * zh
   */
  lang?: string;
  /**
   * @remarks
   * The UUID of the second published version for comparison.
   * 
   * > To obtain the UUID of a historical version, call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation. The system automatically generates a UUID for a new version.
   * 
   * This parameter is required.
   * 
   * @example
   * sfdf2395-e814-459f-9662-xxxxx
   */
  newPlaybookReleaseId?: number;
  /**
   * @remarks
   * The UUID of the first published version for comparison.
   * 
   * > To obtain the UUID of a historical version, call the [DescribePlaybookReleases](~~DescribePlaybookReleases~~) operation. The system automatically generates a UUID for a new version.
   * 
   * This parameter is required.
   * 
   * @example
   * sflk23423-e814-459f-9662-xxxxx
   */
  oldPlaybookReleaseId?: number;
  /**
   * @remarks
   * The UUID of the playbook.
   * 
   * > Call the [DescribePlaybooks](~~DescribePlaybooks~~) operation to obtain this parameter.
   * 
   * This parameter is required.
   * 
   * @example
   * f916b93e-e814-459f-9662-xxxxx
   */
  playbookUuid?: string;
  static names(): { [key: string]: string } {
    return {
      lang: 'Lang',
      newPlaybookReleaseId: 'NewPlaybookReleaseId',
      oldPlaybookReleaseId: 'OldPlaybookReleaseId',
      playbookUuid: 'PlaybookUuid',
    };
  }

  static types(): { [key: string]: any } {
    return {
      lang: 'string',
      newPlaybookReleaseId: 'number',
      oldPlaybookReleaseId: 'number',
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

