// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class CommitFileShrinkRequest extends $dara.Model {
  name?: string;
  optionShrink?: string;
  parentDentryUuid?: string;
  tenantContextShrink?: string;
  uploadKey?: string;
  static names(): { [key: string]: string } {
    return {
      name: 'Name',
      optionShrink: 'Option',
      parentDentryUuid: 'ParentDentryUuid',
      tenantContextShrink: 'TenantContext',
      uploadKey: 'UploadKey',
    };
  }

  static types(): { [key: string]: any } {
    return {
      name: 'string',
      optionShrink: 'string',
      parentDentryUuid: 'string',
      tenantContextShrink: 'string',
      uploadKey: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

