// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListHotwordLibrariesResponseBodyHotwordLibraryList extends $dara.Model {
  /**
   * @example
   * 2017-01-11T12:00:00Z
   */
  creationTime?: string;
  description?: string;
  /**
   * @example
   * a93b91141c0f422fa114af203f8b****
   */
  hotwordLibraryId?: string;
  /**
   * @example
   * 2017-01-11T12:00:00Z
   */
  modifiedTime?: string;
  /**
   * @example
   * my_hotwords
   */
  name?: string;
  /**
   * @example
   * ASR
   */
  usageScenario?: string;
  static names(): { [key: string]: string } {
    return {
      creationTime: 'CreationTime',
      description: 'Description',
      hotwordLibraryId: 'HotwordLibraryId',
      modifiedTime: 'ModifiedTime',
      name: 'Name',
      usageScenario: 'UsageScenario',
    };
  }

  static types(): { [key: string]: any } {
    return {
      creationTime: 'string',
      description: 'string',
      hotwordLibraryId: 'string',
      modifiedTime: 'string',
      name: 'string',
      usageScenario: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

