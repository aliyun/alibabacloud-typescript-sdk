// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ExternalMultiFileRevisionConfig extends $dara.Model {
  revisionCount?: number;
  revisionMergeEnabled?: boolean;
  revisionRecyclePeriod?: number;
  static names(): { [key: string]: string } {
    return {
      revisionCount: 'revision_count',
      revisionMergeEnabled: 'revision_merge_enabled',
      revisionRecyclePeriod: 'revision_recycle_period',
    };
  }

  static types(): { [key: string]: any } {
    return {
      revisionCount: 'number',
      revisionMergeEnabled: 'boolean',
      revisionRecyclePeriod: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

