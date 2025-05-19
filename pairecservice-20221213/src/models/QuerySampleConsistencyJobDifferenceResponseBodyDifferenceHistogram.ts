// This file is auto-generated, don't edit it
import * as $dara from '@darabonba/typescript';


export class QuerySampleConsistencyJobDifferenceResponseBodyDifferenceHistogram extends $dara.Model {
  abscissa?: string;
  value?: number;
  static names(): { [key: string]: string } {
    return {
      abscissa: 'Abscissa',
      value: 'Value',
    };
  }

  static types(): { [key: string]: any } {
    return {
      abscissa: 'string',
      value: 'number',
    };
  }

  validate() {
    super.validate();
  }

  constructor(map?: { [key: string]: any }) {
    super(map);
  }
}

