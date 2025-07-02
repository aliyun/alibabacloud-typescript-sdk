// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class ListLabelsRequest extends $dara.Model {
  labelContent?: string;
  labelId?: string;
  maxResults?: number;
  nextToken?: string;
  static names(): { [key: string]: string } {
    return {
      labelContent: 'LabelContent',
      labelId: 'LabelId',
      maxResults: 'MaxResults',
      nextToken: 'NextToken',
    };
  }

  static types(): { [key: string]: any } {
    return {
      labelContent: 'string',
      labelId: 'string',
      maxResults: 'number',
      nextToken: 'string',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

